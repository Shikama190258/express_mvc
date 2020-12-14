//モジュール読み込み
const express = require("express");

const ejs = require("ejs");


const config = require("config");

//今回の追加モジュール express-ejs-layouts
const layouts = require("express-ejs-layouts");

//モジュール追加 express-ejs-layouts
// const layouts = require("./routes");

//カスタムモジュール　読み込み
const routes = require("./routes");

const port = config.server.port;
const host = config.server.host;

console.log(port);
console.log(host);


//Express を作成
const app = express();


// EJS を有効にする（テンプレートエンジンを利用する）
// 今回の修正修正
// app.set("ejs", ejs.renderFile);
// テンプレートエンジンをEJSにする
app.set("view engine", "ejs");
// views/layouts/layout.ejs を利用する
app.set("layout", "layouts/layout");
// レイアウトを有効にする
app.use(layouts);

// ミドルウェア設定
//JSON
app.use(express.json());

//URLエンコード
app.use(express.urlencoded({ extended: true}));

//静的ファイル有効
app.use(express.static(__dirname + "public"));

//ミドルウェアルーティング 前回12/10書き忘れ
app.use(routes);

//ポート:3000　ホスト:localhost　で待機
app.listen(port, host, () => {
    console.log("app listen: http://$(host):$(port)");

});























