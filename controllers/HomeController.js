
//アクションメソッド

exports.index = (req, res) => {
    // res.semd("HomeController index");
    // 処理
    // res.render('home/index.ejs')

    let data = {
        title: 'Index Page', 
        message: 'Welcome to Homepage',
    };

    // HTMLの表示＆dataを受け渡す
    // views/home/this.index.ejs

    res.render('home/index.ejs', data)
    
    // tp://127.0.0.1:3000/にアクセス

};


exports.about = (req, res) => {
    
    // let items = [
    //     // 連想配列
    //     {}


    // ];


    // 処理
    

    let data = {
        title: 'About Page', 
        message: 'This is about page',
        name: 'Tokyo Taro'
    };

    // HTMLの表示＆dataを受け渡す
    // views/home/about.ejs
    
    res.render('home/about.ejs', data)

    // tp://127.0.0.1:3000/aboutにアクセス


};



exports.item = (req, res) => {
    
    let items = [
        // 連想配列
        { name: 'Apple', price: 150 },
        { name: 'Orange', price: 200 },
        { name: 'Peach', price: 350 }


    ];


    // 処理
    

    let data = {
        items: this.item, 
        
    };

    // HTMLの表示＆dataを受け渡す
    // views/home/about.ejs
    
    res.render('home/items.ejs', data)

    // tp://127.0.0.1:3000/itemsにアクセス


};



































