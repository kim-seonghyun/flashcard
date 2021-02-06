const User = require("../model/users");

module.exports = {
    //회원가입창 불러오기
    new: (req,res,next)=>{
        res.render('user/new');
    },
    //회원가입 정보대로 등록하기
    signIn: (req,res,next)=>{
        let {user,email} = req.body;
        let newUser = new User({user,email});

        User.register(newUser,req.body.password, (error,user)=>{
            if(user){
                res.redirect("/");
            }else{
                res.redirect("/users/new");
            }
        })
    }
}