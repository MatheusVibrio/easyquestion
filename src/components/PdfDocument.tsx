// src/components/PdfDocument.tsx
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Definindo a interface para as props
interface Resposta {
  descricao: string;
  fg_correta: string;
}

interface Questao {
  id_lcto: number;
  ordem: number;
  enunciado: string;
  dificuldade: string;
  respostas: Resposta[];
}

interface ProvaDetalhes {
  prova: string;
  disciplina: string;
  curso: string;
  questoes: Questao[];
}

// Estilos do PDF
const styles = StyleSheet.create({
  dissertativaLine: {
    marginTop: 30,           // Espaçamento entre as linhas
    borderBottomWidth: 1,    // Cria uma linha inferior
    borderBottomColor: '#000', // Cor da linha (preto)
    width: '100%',           // Tamanho da linha em 100% da largura
  },
  page: {
    flexDirection: 'column',
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 12,
    marginBottom: 5,
  },
  logo: {
    width: 100,
    height: 40,
  },
  studentInfo: {
    marginBottom: 20,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  question: {
    marginBottom: 5,
  },
  answer: {
    marginLeft: 10,
  },
});

// Componente do PDF
const PdfDocument: React.FC<{ provaDetalhes: ProvaDetalhes }> = ({ provaDetalhes }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Cabeçalho com logo e informações do aluno */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Nome: ______________________________________________________</Text>
          <Text style={styles.headerText}>RA: ____________</Text>
          <Text style={styles.headerText}>Data: __/__/____</Text>
        </View>
        <Image
          style={styles.logo}
          src="https://www.fae.br/unifae2/wp-content/uploads/2021/12/logo-unifae-220.png"
        />
      </View>

      {/* Informações da prova */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Prova: {provaDetalhes.prova}</Text>
        <Text style={styles.subtitle}>Disciplina: {provaDetalhes.disciplina}</Text>
        <Text style={styles.subtitle}>Curso: {provaDetalhes.curso}</Text>
      </View>

      {/* Questões */}
      <View style={styles.section}>
        {provaDetalhes.questoes.map((questao, index) => (
          <View key={questao.id_lcto} style={styles.question}>
            <Text>Questão {index + 1}: {questao.enunciado}</Text>
            
            {questao.respostas.length > 1 ? (
              // Questão de múltipla escolha
              questao.respostas.map((resposta, idx) => (
                <Text key={idx} style={styles.answer}>
                  {String.fromCharCode(65 + idx)}. {resposta.descricao}
                </Text>
              ))
            ) : (
              // Questão dissertativa
              <View>
                <Text style={styles.dissertativaLine}></Text>
                <Text style={styles.dissertativaLine}></Text>
                <Text style={styles.dissertativaLine}></Text>
              </View>
        )}
      </View>
  ))}
</View>

    </Page>
  </Document>
);

export default PdfDocument;
