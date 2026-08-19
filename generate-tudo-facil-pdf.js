import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4'
});

const margin = 20;
const pageWidth = 210;
const contentWidth = pageWidth - (margin * 2);
let y = 20;

// Header
doc.setFont('helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(87, 96, 106);
doc.text('ESTADO DO RIO GRANDE DO SUL • MUNICÍPIO DE TAQUARA', margin, y);
y += 6;

doc.setFont('helvetica', 'bold');
doc.setFontSize(13);
doc.setTextColor(31, 35, 40);
doc.text('PROJETO DE LEI Nº _____, DE _____ DE __________________ DE 2026', margin, y);
y += 8;

// Ementa box
doc.setFont('helvetica', 'italic');
doc.setFontSize(9.5);
doc.setTextColor(31, 35, 40);
const ementa = 'Dispõe sobre a autorização ao Poder Executivo Municipal para firmar convênio com o Governo do Estado do Rio Grande do Sul, visando à instalação de uma unidade do Programa Tudo Fácil no Município de Taquara, e dá outras providências.';
const splitEmenta = doc.splitTextToSize(ementa, contentWidth * 0.7);

const ementaX = margin + (contentWidth * 0.3);
doc.text(splitEmenta, ementaX, y);
y += (splitEmenta.length * 4.5) + 6;

// Preamble
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('A PREFEITA MUNICIPAL DE TAQUARA, no uso de suas atribuições legais que lhe confere a Lei Orgânica do Município, faz saber que a Câmara Municipal de Vereadores aprovou e ela sanciona e promulga a seguinte Lei:', margin, y, { maxWidth: contentWidth });
y += 12;

// Articles
const articles = [
  {
    art: 'Art. 1º',
    text: 'Fica o Poder Executivo Municipal autorizado a adotar todas as medidas administrativas, jurídicas e operacionais necessárias para celebrar convênio de cooperação institucional com o Governo do Estado do Rio Grande do Sul, por intermédio da Secretaria de Planejamento, Governança e Gestão (SPGG), visando à implantação e ao funcionamento de uma unidade de atendimento presencial do Programa Tudo Fácil no Município de Taquara.'
  },
  {
    art: 'Art. 2º',
    text: 'A unidade do Tudo Fácil Taquara terá como objetivo centralizar e descentralizar a prestação de serviços públicos essenciais para a população local e dos municípios integrantes da Região do Vale do Paranhana.'
  },
  {
    art: 'Art. 3º',
    text: 'O rol de serviços prestados na unidade contemplará, prioritariamente:',
    items: [
      'I – Documentação e Identificação: Emissão de 1ª e 2ª vias da Carteira de Identidade Nacional (CIN), sob responsabilidade do Instituto-Geral de Perícias (IGP);',
      'II – Trânsito e Mobilidade: Atendimento institucional do Departamento Estadual de Trânsito do Rio Grande do Sul (DetranRS) para requerimentos, defesa de autuações, recursos de infrações e serviços de condutores;',
      'III – Cidadania e Inclusão Digital: Atendimento do Balcão Gov.br para suporte, criação, recuperação de contas e elevação de nível de acesso do cidadão;',
      'IV – Previdência e Assistência Social: Atendimento do IPE Prev, IPE Saúde e da Fundação de Articulação e Desenvolvimento de Políticas Públicas para Pessoas com Deficiência e com Altas Habilidades no RS (FADERS), incluindo a solicitação da Carteira de Identificação da Pessoa com Transtorno do Espectro do Autismo (CIPTEA) e Passe Livre Intermunicipal;',
      'V – Concessionárias de Serviços Públicos: Balcão presencial de atendimento da Companhia Riograndense de Saneamento (CORSAN) e da RGE Sul Distribuidora de Energia S.A. (RGE);',
      'VI – Serviços Municipais: Atendimento integrado da Prefeitura Municipal para emissão de certidões, taxas municipais, suporte ao microempreendedor e arrecadação.'
    ]
  },
  {
    art: 'Art. 4º',
    text: 'Para a viabilização da unidade, o Poder Executivo Municipal poderá:',
    items: [
      'I – Ceder imóvel público municipal adequado ou arcar com os custos de locação de espaço físico central e acessível;',
      'II – Ceder servidores públicos municipais ou contratar pessoal via processo seletivo para atuar na recepção, triagem e atendimento técnico;',
      'III – Arcar com custos de adaptação, infraestrutura tecnológica e manutenção predial, conforme especificado no termo de convênio e no plano de trabalho ajustado entre os entes.'
    ]
  },
  {
    art: 'Art. 5º',
    text: 'As despesas decorrentes da execução desta Lei correrão por conta de dotações orçamentárias próprias, suplementadas se necessário.'
  },
  {
    art: 'Art. 6º',
    text: 'Esta Lei entra em vigor na data de sua publicação.'
  }
];

articles.forEach((a) => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.8);
  doc.text(a.art, margin, y);
  
  doc.setFont('helvetica', 'normal');
  const splitArt = doc.splitTextToSize(a.text, contentWidth - 16);
  doc.text(splitArt, margin + 16, y);
  y += (splitArt.length * 4) + 2;

  if (a.items) {
    a.items.forEach(item => {
      const splitItem = doc.splitTextToSize(item, contentWidth - 20);
      doc.text(splitItem, margin + 20, y);
      y += (splitItem.length * 3.8) + 1.5;
    });
  }
  y += 2;
});

// Page 2: Justificativa
doc.addPage();
y = 20;

doc.setFont('helvetica', 'bold');
doc.setFontSize(12);
doc.setTextColor(31, 35, 40);
doc.text('JUSTIFICATIVA', margin, y);
y += 6;

doc.setFont('helvetica', 'italic');
doc.setFontSize(9.5);
doc.text('Senhor Presidente, Senhoras e Senhores Vereadores:', margin, y);
y += 7;

const justifParagraphs = [
  'Submetemos à apreciação desta Egrégia Casa Legislativa o presente Projeto de Lei, que autoriza o Poder Executivo Municipal a articular junto ao Governo do Estado do Rio Grande do Sul a instalação de uma unidade do Tudo Fácil em Taquara.',
  'Taquara possui cerca de 60 mil habitantes e atua historicamente como cidade-mãe e polo geográfico do Vale do Paranhana. Atualmente, centenas de moradores de Taquara, Igrejinha, Parobé, Três Coroas e Rolante precisam se deslocar até Porto Alegre ou Novo Hamburgo para encaminhar ou resolver exigências documentais, previdenciárias e de trânsito. Esse deslocamento gera custos elevados de transporte, perda de dias de trabalho e transtornos significativos à população de baixa renda.',
  'A instalação de um posto do Tudo Fácil em nosso município reunirá em um único espaço físico serviços do IGP (CIN/RG), DetranRS, Gov.br, IPE, FADERS, CORSAN, RGE e da própria Prefeitura. Além da óbvia economia de tempo e dinheiro para o cidadão, a medida movimentará o comércio local e consolidará Taquara como o centro administrativo de serviços de toda a nossa região.',
  'Trata-se de uma demanda respaldada pelo desejo da comunidade e fundamental para a promoção da cidadania, eficiência pública e qualidade de vida. Diante da relevância da matéria, contamos com o apoio dos nobres Edis para a aprovação deste Projeto de Lei.'
];

doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
justifParagraphs.forEach(p => {
  const splitP = doc.splitTextToSize(p, contentWidth);
  doc.text(splitP, margin, y);
  y += (splitP.length * 4.2) + 3;
});

y += 8;
doc.setFont('helvetica', 'italic');
doc.text('Taquara/RS, _____ de __________________ de 2026.', margin, y);
y += 12;

doc.setFont('helvetica', 'bold');
doc.text('Vini Amaral', margin, y);
y += 4;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(87, 96, 106);
doc.text('Proponente Cidadão • Taquara/RS', margin, y);

const publicDir = path.join(process.cwd(), 'public');
const pdfBuffer = Buffer.from(doc.output('arraybuffer'));

fs.writeFileSync(path.join(publicDir, 'pdf-tudo-facil.pdf'), pdfBuffer);
fs.writeFileSync(path.join(publicDir, 'tudo-facil-taquara.pdf'), pdfBuffer);
fs.writeFileSync(path.join(publicDir, 'Projeto_Unidade_Tudo_Facil_Taquara.pdf'), pdfBuffer);

console.log('Tudo Fácil PDFs successfully generated in /public!');
