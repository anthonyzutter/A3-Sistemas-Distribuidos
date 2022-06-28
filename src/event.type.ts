export default interface EventData {
  id?: any | null;
  nome: string;
  descricao: string;
  capacidade: number;
  dataInicio: Date;
  dataFim: Date;
  estado: string;
  cidade: string;
  rua: string;
  bairro: string;
  numero: string;
  complemento: string;
  imagemURL: string;
}
