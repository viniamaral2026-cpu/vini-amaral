import React, { useEffect, useState } from 'react';
import { Smartphone, Monitor, Download, X, Check, Tv, Tablet } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const PWAInstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  useEffect(() => {
    // Check if already in standalone/PWA mode
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    // Check if iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAppleDevice = /iphone|ipad|ipod/.test(userAgent);
    if (isAppleDevice && !isStandalone) {
      setIsIOS(true);
    }

    // Listen for standard beforeinstallprompt
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else if (isIOS) {
      setShowIOSGuide(true);
    }
  };

  if (isInstalled || isDismissed) {
    return null;
  }

  // Show banner if deferredPrompt is available or if on mobile/tablet/TV where PWA is advantageous
  return (
    <aside 
      aria-label="Instalar Aplicativo Multiplataforma"
      className="bg-[#f0f9ff] border-b border-[#b6e3ff] px-4 py-2.5 text-xs text-[#1f2328] transition-all hardware-accelerated"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-[#0969da] text-white flex items-center justify-center shrink-0 shadow-2xs">
            <Download className="w-4 h-4" />
          </div>
          <div>
            <div className="font-semibold text-[#0969da] flex items-center gap-1.5">
              <span>App PWA Multi-plataforma Disponível</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] bg-[#ddf4ff] text-[#0969da] px-1.5 py-0.2 rounded border border-[#b6e3ff]">
                <Smartphone className="w-2.5 h-2.5" />
                <Tablet className="w-2.5 h-2.5" />
                <Tv className="w-2.5 h-2.5" />
                <Monitor className="w-2.5 h-2.5" />
                <span>Celular • Tablet • TV • PC</span>
              </span>
            </div>
            <p className="text-[11px] text-[#57606a]">
              Instale para carregamento instantâneo sem delay e acesso offline ao currículo.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleInstallClick}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold text-xs text-white bg-[#0969da] hover:bg-[#085cc0] shadow-2xs transition-colors focus:ring-2 focus:ring-offset-1 focus:ring-[#0969da]"
            title="Instalar aplicativo no dispositivo"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Instalar Aplicativo</span>
          </button>

          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            className="p-1.5 rounded-md text-[#57606a] hover:bg-[#ddf4ff] transition-colors"
            title="Fechar aviso de instalação"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* iOS Safari instructions modal/drawer */}
      {showIOSGuide && (
        <div className="mt-2 pt-2 border-t border-[#b6e3ff] text-[11px] text-[#57606a] flex items-center justify-between gap-2">
          <span>
            📱 <strong>No iPhone / iPad:</strong> Toque no botão <strong>Compartilhar</strong> (ícone do quadrado com seta para cima) e selecione <strong>&quot;Adicionar à Tela de Início&quot;</strong>.
          </span>
          <button 
            type="button"
            onClick={() => setShowIOSGuide(false)}
            className="text-[#0969da] font-semibold hover:underline"
          >
            Entendi
          </button>
        </div>
      )}
    </aside>
  );
};
