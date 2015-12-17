var React = require('react');

var DefaultLayout = React.createClass({
  render: function() {
    var githubStyle ={
      position: 'fixed',
      top: 0,
      right: 0,
      border: 0,
      zIndex: 200
    };
    return (
      <html>
        <head>
          <meta charSet="utf-8"></meta>

          <title>{this.props.title}</title>

          <meta name="description" content="List of great programmers and companies they were rejected by."></meta>
          <meta name="author" content="Jon Kuperman"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

          <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css"></link>
          <link rel="stylesheet" type="text/css" href="/css/style.css"></link>
        </head>
        <body>
          // Github ribbon
          <a href="https://github.com/syossan27/rejected-us-jp">
            <img style={githubStyle} src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"></img>
          </a>
          // End Github ribbon
          <header className="text-center">
            <h1 className="title">They Rejected Us in JP.</h1>
            <div>誰もが会社からお祈りされています。 - これはそんな私達のストーリーです。</div>
            <div>あなたの祈られストーリーを追加しませんか？</div>
            <div><a href="https://github.com/syossan27/rejected-us-jp/issues/new">issueを追加</a> か こちらのTwitterアカウントに連絡 <a href="https://twitter.com/syossan27">@syossan27</a>していただければこちらで追加します。</div>
          </header>
          <div className="grid text-center Rejections">{this.props.children}</div>
          <script src="/js/masonry.js"></script>
          <script src="/js/script.js"></script>
          <script src="/js/googleAnalytics.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
