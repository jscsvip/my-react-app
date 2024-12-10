let express =  require('express');

let app = express();
app.get('/getData',function(req,res){
  const data = [
    {
      name:'张三',
      desc: '描述',

    }
  ]
  res.send(data)
})
app.listen(3000,function(){
  console.log('server start')
})