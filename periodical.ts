importe  {  document  } de  "./document"
importe  {  person  }  de  "./person"


 export  class  periodical  extends  Document {
    iss : Numero
    volume : numero
    problema : numero

    construtor ( título : String ,  subtitle : String ,  publicadoAt : Date ,  author : Pessoa ,  iss : Número , 
        volume : Numero ,  edicao : Numero ) {
        super ( this.title,  this.subtitle ,  this.publicadoat ,  this.author )
          isso . iss  =  iss
          isso . problema  =  problema
          isso . volume  =  volume
      }
  }
exportar  periódico padrão 