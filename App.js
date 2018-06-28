import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView ,ScrollView,Button } from 'react-native';

export default class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state={
      url:'https://www.searchgurbani.com/dasam-granth/page/21/print-view'
    };

    this.onPressLoadPrevPage = this.onPressLoadPrevPage.bind(this);
    this.onPressLoadNextPage = this.onPressLoadNextPage.bind(this);
  }

  onPressLoadPrevPage()
  {
    console.log("prev page");
    let prev = -1;
    // let newUrl = this.getNewUrl(this.state.url);
    this.setState((prevState,props)=>{              // props passed to App compoenent
      return { url:this.getNewUrl(prevState.url,prev) };
    });
  }

  onPressLoadNextPage()
  {
    console.log("next page");

    let next =1;
    // let newUrl = this.getNewUrl(this.state.url);
    this.setState((prevState,props)=>{              // props passed to App compoenent
      return { url:this.getNewUrl(prevState.url,next) };
    });
  }

  getNewUrl(currentUrl,change)
  {
    // https://www.searchgurbani.com/dasam-granth/page/10

    let newUrl,newPageNumber;
    newPageNumber = Number(currentUrl.match("[0-9]+")) + change ;
    newUrl = 'https://www.searchgurbani.com/dasam-granth/page/'+newPageNumber+'/print-view';
    console.log("newUrl:: "+ newUrl);
    return newUrl;
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.inlineButtons}>
              {/* <Button style={styles.navigateButtons}
                onPress={this.onPressLearnMore}
                title={page.back}
                color="#841584"
                accessibilityLabel="shows the back page"
              /> */}
              {/* <Button
                onPress={this.onPressLearnMore}
                title={page.next}
                color="#841584"
                accessibilityLabel="shows the next page"
              /> */}
            </View>

            <Button style={styles.navigateButtons}
              onPress={this.onPressLoadPrevPage}
              title={page.back}
              color="#841584"
              accessibilityLabel="shows the back page"
            />
            <Button style={styles.navigateButtons}
              onPress={this.onPressLoadNextPage}
              title={page.next}
              color="#91A8D0"
              accessibilityLabel="shows the next page"
            />
            <WebView
            source={{uri: this.state.url }}
            style={styles.pageContent}
            />

            <View style={styles.inlineButtons}>
              <Button style={styles.navigateButtons}
                onPress={this.onPressLoadPrevPage}
                title={page.back}
                color="#841584"
                accessibilityLabel="shows the back page"
              />
              <Button style={styles.navigateButtons}
                onPress={this.onPressLoadNextPage}
                title={page.next}
                color="#91A8D0"
                accessibilityLabel="shows the next page"
              />
            </View>


        </View>



    );
  }
}

const page ={next:"Next",back:"Back"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingVertical: 20
  },
  pageContent: {
    marginTop: 20,
    maxHeight: 600,
    width: 450,
    flex: 1
  },
  inlineButtons:{
    flexDirection:'row',
    flexWrap:'wrap'
  },
  navigateButtons:{
    width:300,
    margin:20
  }
});

// return (
//   <ScrollView contentContainerStyle={styles.contentContainer}>
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//
//     <WebView>
//     source={{uri: 'https://github.com/facebook/react-native'}}
//     />
//   </ScrollView>
//
// );
