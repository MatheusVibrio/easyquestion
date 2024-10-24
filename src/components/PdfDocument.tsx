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

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Estilos do PDF
const styles = StyleSheet.create({
  dissertativaLine: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: '100%',
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
  subtitle: {
    fontSize: 12,
    marginBottom: 5,
  },
  question: {
  fontSize: 12,
  marginTop: 10,
  marginBottom: 5,
  fontWeight: 'bold',
  },
  answer: {
    fontSize: 12,
    marginLeft: 15,
    marginTop: 10,
  },
});

// Componente do PDF
const PdfDocument: React.FC<{ provaDetalhes: ProvaDetalhes }> = ({ provaDetalhes }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Cabeçalho com logo e informações do aluno */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Nome: ________________________________________________</Text>
          <Text style={styles.headerText}>RA:   ____________</Text>
          <Text style={styles.headerText}>Data: ___/___/______</Text>
        </View>
        <Image
          style={styles.logo}
          src="../../public/assets/images/logoUnifae.png" 
        />
      </View>

      {/* Informações da prova */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Prova: {provaDetalhes.prova}</Text>
        <Text style={styles.subtitle}>Disciplina: {capitalizeFirstLetter(provaDetalhes.disciplina)}</Text>
        <Text style={styles.subtitle}>Curso: {capitalizeFirstLetter(provaDetalhes.curso)}</Text>
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
