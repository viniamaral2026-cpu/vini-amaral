import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4'
});

// Setup styles and margins
const margin = 18;
const pageWidth = 210;
const contentWidth = pageWidth - (margin * 2);
let y = 18;

// Primary colors
const colorDark = '#1f2328';
const colorBlue = '#0969da';
const colorGray = '#57606a';
const colorLightBg = '#f6f8fa';

// Header section
doc.setFont('helvetica', 'bold');
doc.setFontSize(20);
doc.setTextColor(31, 35, 40);
doc.text('MARCOS VINÍCIUS (VINI AMARAL)', margin, y);
y += 6;

doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(9, 105, 218);
doc.text('Cargos Operacionais, Administrativos e de Controladoria Jurídica', margin, y);
y += 5;

doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(87, 96, 106);
doc.text('Taquara - RS | WhatsApp: (51) 98144-6019 | viniamaral2026@gmail.com', margin, y);
y += 4;
doc.text('DEEVO Soluções Financeiras LTDA (CNPJ: 63.187.175/0001-70) | www.deevofinanceiras.com.br', margin, y);
y += 6;

// Divider line
doc.setDrawColor(208, 215, 222);
doc.setLineWidth(0.4);
doc.line(margin, y, margin + contentWidth, y);
y += 6;

// Function for section title
function addSectionTitle(title) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(31, 35, 40);
  doc.text(title.toUpperCase(), margin, y);
  y += 2;
  doc.setDrawColor(9, 105, 218);
  doc.setLineWidth(0.6);
  doc.line(margin, y, margin + contentWidth, y);
  y += 5;
}

// 1. Resumo Profissional
addSectionTitle('1. Resumo Profissional');
doc.setFont('helvetica', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(31, 35, 40);
const summaryText = 'Profissional autodidata com forte domínio tecnológico, dedicado a trazer eficiência e organização para rotinas administrativas e operacionais. Une raciocínio analítico e capacidade de resolução de problemas ao uso estratégico de inteligência artificial e ferramentas digitais para acelerar pesquisas, redigir e revisar documentos e estruturar informações complexas. Perfil proativo, que aprende sistemas novos com rapidez e assume a responsabilidade de destravar processos, reduzir retrabalho e manter arquivos e dados organizados — o suporte técnico e operacional que libera tempo para o que realmente exige atenção especializada.';

const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
doc.text(splitSummary, margin, y);
y += (splitSummary.length * 4.2) + 4;

// 2. Competências
addSectionTitle('2. Competências Principais & Domínio Técnico');
const comps = [
  '• Gestão e organização de arquivos digitais (PDFs, nuvem, backups e nomenclatura de dossiês)',
  '• Pesquisa avançada, cruzamento de informações e diagnóstico de problemas',
  '• Uso de Inteligência Artificial generativa para automação de tarefas, redação e análise de dados',
  '• Digitação, formatação e revisão de documentos com padrão profissional',
  '• Conhecimento sólido em sistemas operacionais e resolução de falhas técnicas do dia a dia',
  '• Organização de rotinas e priorização de demandas com foco em prazos'
];

doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(31, 35, 40);
comps.forEach(c => {
  const splitC = doc.splitTextToSize(c, contentWidth);
  doc.text(splitC, margin, y);
  y += (splitC.length * 4) + 1;
});
y += 3;

// 3. Experiência Profissional
addSectionTitle('3. Experiência Profissional & Resolução de Problemas');

// Experience 1
doc.setFont('helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(31, 35, 40);
doc.text('Gestão Administrativa e Suporte Operacional Multidisciplinar', margin, y);
doc.setFont('helvetica', 'italic');
doc.setFontSize(8.5);
doc.setTextColor(87, 96, 106);
doc.text('Atuação recente | Projetos próprios e prestação de serviços — Taquara/RS', margin, y + 4);
y += 8;

const exp1Items = [
  '- Suporte operacional em rotinas administrativas, incluindo triagem, organização e acompanhamento de demandas.',
  '- Organização de dossiês digitais e gestão de dados, separando com clareza documentos, evidências e anexos.',
  '- Gestão de diagnósticos técnicos em sistemas e ferramentas digitais, identificando falhas e propondo soluções rápidas.',
  '- Otimização de rotinas através de ferramentas digitais e IA, reduzindo tempo gasto em tarefas repetitivas.',
  '- Elaboração e formatação de relatórios, textos e materiais com padrão visual e gramatical profissional.'
];

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(31, 35, 40);
exp1Items.forEach(item => {
  const splitItem = doc.splitTextToSize(item, contentWidth - 4);
  doc.text(splitItem, margin + 2, y);
  y += (splitItem.length * 3.8) + 0.8;
});
y += 3;

// Experience 2
doc.setFont('helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(31, 35, 40);
doc.text('Projetos de Organização e Estruturação de Processos', margin, y);
doc.setFont('helvetica', 'italic');
doc.setFontSize(8.5);
doc.setTextColor(87, 96, 106);
doc.text('Atuação contínua | Iniciativas autônomas — Taquara/RS', margin, y + 4);
y += 8;

const exp2Items = [
  '- Estruturação de fluxos de trabalho do zero, definindo etapas, responsáveis e prazos para ganho de eficiência.',
  '- Diagnóstico e resolução de problemas técnicos e operacionais em diferentes contextos de trabalho.',
  '- Aplicação de ferramentas de IA para acelerar pesquisa, análise e produção de conteúdo escrito.'
];

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(31, 35, 40);
exp2Items.forEach(item => {
  const splitItem = doc.splitTextToSize(item, contentWidth - 4);
  doc.text(splitItem, margin + 2, y);
  y += (splitItem.length * 3.8) + 0.8;
});
y += 4;

// 4. Formação
addSectionTitle('4. Formação & Aprendizado Contínuo');
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(31, 35, 40);
doc.text('• Ensino Médio', margin, y);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(87, 96, 106);
doc.text('— Em curso / dedicação ao aprendizado autodidata e disciplinas fundamentais.', margin + 28, y);
y += 5;

doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(31, 35, 40);
doc.text('• Formação Continuada em Software e Tecnologias Digitais', margin, y);
y += 4;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(87, 96, 106);
doc.text('— Estudo contínuo e autônomo de programação, ferramentas de IA e sistemas operacionais para o dia a dia.', margin + 4, y);
y += 7;

// Footer
doc.setDrawColor(208, 215, 222);
doc.setLineWidth(0.3);
doc.line(margin, 280, margin + contentWidth, 280);

doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(87, 96, 106);
doc.text('Currículo Profissional • Vini Amaral • WhatsApp: (51) 98144-6019 • viniamaral2026@gmail.com', margin, 285);

const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync(path.join(publicDir, 'curriculo-vini-amaral.pdf'), pdfBuffer);
fs.writeFileSync(path.join(publicDir, 'curriculo.pdf'), pdfBuffer);
console.log('PDFs generated successfully in /public!');
