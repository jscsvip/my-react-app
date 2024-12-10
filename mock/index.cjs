let express =  require('express');

let app = express();
app.get('/getData',function(req,res){
  const data = [
    {
      key: '1',
      name: '阿飞',
      age: 18,
      address: '玄武湖1号',
    },
    {
      key: '2',
      name: '阿飞飞',
      age: 42,
      address: '西湖区湖底公园1号',
    }
  ]
  res.send(data)
})
app.listen(3000,function(){
  console.log('server start')
})