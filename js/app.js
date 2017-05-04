$.extend({
  getValues:function(url) {
    var result = null;
    $.ajax({
      url: "http://swapi.co/api/people/",
      type:"get",
      async: false,
      success: function (data) {
        result = data;
      }
    });
  return result;
  }
});
var results = $.getValues("url string");
console.log(results);

function Column(){
  return(
    <div className="Column">
      <p>{results.results[0].name}</p>
    </div>
  );
}

function Columnbox() {
  return(
    <div className="ColumnBox">
        <Column />
        <Column />
    </div>
  );
}

  var StarWarsPage = React.createClass({
    render: function() {
      return (
        <div>
          <Columnbox />

        </div>
      );
    }
  });

  ReactDOM.render(
    <StarWarsPage />,
    document.getElementById('container')
  );
