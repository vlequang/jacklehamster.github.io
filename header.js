if(window==top) {
    window.addEventListener("load",
        function(e) {
            e.currentTarget.removeEventListener(e.type,arguments.callee);
            var reponame = window.location.href.split("http://jacklehamster.github.io/")[1].split("/")[0];
            var loc = window.location.href.split(reponame+"/")[1].split("/")[0];
            var table = document.createElement("table");
            table.width="100%";
            table.border = 0;
            var tr = document.createElement("tr");
            table.appendChild(tr);
            //  Left cell
            var td = document.createElement("td");
            tr.appendChild(td);
            td.width = "33%";
            td.style.verticalAlign = "top";
            
            td.innerHTML = 
                (reponame==""?'':'[<a href="..">&lt;&lt; <i>'+'http://jacklehamster.github.io/'+reponame+'</i></a>]<br>')+
                (reponame==""?'<a href="https://github.com/jacklehamster/jacklehamster.github.io">':loc==""?'<a href="https://github.com/jacklehamster/'+reponame+'">':'<a href="https://github.com/jacklehamster/'+reponame+'/tree/gh-pages/'+loc+'">')+
                '<img title="Source Code" width=25 height=25 src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"/>'+
                '</a>';
            //  Mid cell
            var td = document.createElement("td");
            tr.appendChild(td);
            td.width = "33%";
            td.align = "center";
            td.style.verticalAlign = "top";
            td.innerHTML = "<h2>"+document.title+"</h2>";
            //  Right cell
            var td = document.createElement("td");
            tr.appendChild(td);
            td.width = "33%";
            td.align = "right";
            td.style.verticalAlign = "top";
            td.innerHTML = '<i><a href="https://twitter.com/jacklehamster">@jacklehamster</a></i>';
            document.body.insertBefore(table,document.body.firstChild);
        });
}
