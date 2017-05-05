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
var obj = $.getValues("url string");


class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: null};
    console.log(obj);
  }

  render() {
    return (
        <div className="Column">
            {obj.results.map(function(person, i) {
              return <IDCard name= {person.name} birthday= {person.birth_year} gender= {person.gender} />;
            })}
        </div>


    );
  }
}
function IDCard(props){
  return(
    <div className="IDCard">
        <h1>{props.name}</h1>
        <p>{props.birthday}</p>
        <p>{props.gender}</p>
    </div>
  );
}

function StarWarsPage() {
  ReactDOM.render(
    <Column />,
    document.getElementById('container')
  );
}

StarWarsPage();


// $.extend({
//   getValues:function(url) {
//     var result = [];
//     $.ajax({
//       url: "http://swapi.co/api/people/",
//       type:"get",
//       async: false,
//       success: function (data) {
//         for (var i = 0; i < data.results.length; i++) {
//           result.push(data.results[i].name);
//         }
//       }
//     });
//   return result;
//   }
// });
// var results = $.getValues("url string");
// console.log(results);
// //stores Json object as a variable ^
//
// function IdCard(index) {
//   return(
//     <div className="IdCard">
//
//     </div>
//   );
// }
//
// function Jedi() {
//   return(
//     <div className="Jedi">
//
//     </div>
//   );
// }
//
// function Darkside(){
//   return(
//     <div className="Darkside">
//       <p></p>
//     </div>
//   );
// }
//
// function Columnbox() {
//   return(
//     <div className="ColumnBox">
//         <Darkside />
//         <Jedi />
//     </div>
//   );
// }
  //
  // var StarWarsPage = React.createClass({
  //   render: function() {
  //     return (
  //       <div>
  //
  //
  //       </div>
  //     );
  //   }
  // });
  //
  // ReactDOM.render(
  //   <StarWarsPage />,
  //   document.getElementById('container')
  // );
