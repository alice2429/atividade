import  {  document  }  de  "./document"
import  { person }  de  "./person"


 export  class  book  extends  Document {
      isbn : Number 
      edicao : numero 
      volume : numero

      construtor ( título : String ,  subtitle : String ,  publicadoat : Date ,  author : Pessoa ,  isbn : Número ,
        edicao : Numero ,  volume : Numero ) {
        super ( this.title ,  this.subtitle ,  this.publicadoAt ,  this.author )
          isso . isbn  =  isbn
          isso . edicao  =  edicao
          isso . volume  =  volume
      }
  }
exportar  livro padrion