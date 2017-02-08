var React = require('react-native');
var Header = require('./header');

var {
  AppRegistry,
  StyleSheet,
  View,
  Text
} = React;

var app = React.createClass({
  render: function(){
    return (
      <View style = {styles.flex}>
        <Header></Header>
        <List title='技术是第一生产力'></List>
        <List title='女朋友是什么'></List>
        <List title='德玛西亚~'></List>
        <List title='死了都要爱'></List>

        <ImportantNews news={[
        '1.中国实现民主自由',
        '2.北京不再有雾霾',
        '3、圣诞节后再说吧']}>
        </ImportantNews>
      </View>
    );
  }
});

var List = React.createClass({
  render: function(){
    return (
      <View style = {styles.list_item}>
        <Text style = {styles.list_item_font}>{this.props.title}</Text>
      </View>
    );
  }
});

var ImportantNews = React.createClass({
  show: function(title){
    alert(title);
  },
  render: function () {
    var news = [];
    for(var i in this.props.news){
      var text = (
          <Text
              onPress = {this.show.bind(this, this.props.news[i])}
              numberOfline = {2}
              style = {styles.news_item}>
            {this.props.news[i]}
          </Text>
      );
      news.push(text);
    }
    return (
        <View style = {styles.flex}>
          <Text style = {styles.news_title}>今日要闻</Text>
          {news}
        </View>
    );
  }
});
// 样式
var styles = StyleSheet.create({
  flex:{
    flex:1
  },
  list_item: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'center'
  },
  list_item_font: {
    fontSize: 16
  },
  news_title: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#CD1D1C',
    marginLeft:10,
    marginRight:15
  },
  news_item:{
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    lineHeight: 20
  }
});

AppRegistry.registerComponent('demo', () => app);
