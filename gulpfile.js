const path=require('path')
const fs=require('fs')
const gulp=require('gulp')
const webserver=require('gulp-webserver')
gulp.task('webserver',function(){
   gulp.src('.')
   .pipe(webserver({
       host:'localhost',
       port:8080,
       open:true
   }))
})
gulp.task('ting',function(){
    gulp.src('.')
    .pipe(webserver({
        host:'localhost',
        port: 8090,
        middleware:function(req,res){
            res.writeHead(200,{
                "Content-type":"text/json;charset=utf-8;",
                "Access-Control-Allow-Origin":"*"
            })
            let data=fs.readFileSync('./data/data.json')
            res.end(data)
        }
    }))
})
gulp.task('default',['webserver','ting'])