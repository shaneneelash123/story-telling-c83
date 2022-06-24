import React from "react"
import {Text,View, StyleSheet,SafeAreaView, Platform, StatusBar, Image,ScrollView,
    TextInput,
    Dimensions} from "react-native"
import AppLoading from 'expo-app-loading'; //npm install
import * as Font from 'expo-font';// npm install
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";

let customFonts = {
    'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
    };

export default class Creatstory extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
            previewImage:"image_1"
        };
    }
    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }
    componentDidMount(){
        this._loadFontsAsync()
    }
    render(){
        if(!this.state.fontsLoaded){
            return(
                <AppLoading/>
            )
        }
        else{
            let preview_images={
                "image_1":require('../assets/story_image_1.png'),
                "image_2":require('../assets/story_image_2.png'),
                "image_3":require('../assets/story_image_3.png'),
                "image_4":require('../assets/story_image_4.png'),
                "image_5":require('../assets/story_image_5.png')

            }
            return(
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                    <View style={styles.appTitle}>
                        <View style={styles.appIcon}>
                            <Image source={require("../assets/logo.png")}
                                style={{width: 60, height: 60, resizeMode:'contain', marginLeft: 10}}
                            />
                        </View>
                        <View style={styles.appTitleTextContainer}>
                            <Text style= {styles.appTitleText}>
                                StoryTelling App
                            </Text>
                        </View>
                    </View>
                    <View style={styles.fieldsContainer}>
                        <ScrollView>
                            <Image source={preview_images[this.state.previewImage]}
                            style={styles.previewImage}/>
                            <View style={{ height: RFValue(this.state.dropdownHeight)}}>
                                <DropDownPicker
                                items={[
                                    { label: "Image 1", value: "image_1" },
                                    { label: "Image 2", value: "image_2" },
                                    { label: "Image 3", value: "image_3" },
                                    { label: "Image 4", value: "image_4" },
                                    { label: "Image 5", value: "image_5" },
                                    ]}
                                    defaultValue={this.state.previewImage}
                                    open={this.state.dropdownHeight == 170 ? true :
                                    false}
                                    onOpen={() => {
                                    this.setState({ dropdownHeight: 170 });
                                    }}
                                    onClose={() => {
                                    this.setState({ dropdownHeight: 40 });
                                    }}
                                    style={{
                                    backgroundColor: "transparent",
                                    borderWidth: 1,
                                    borderColor: "white",
                                    }}
                                    textStyle={{
                                    color: this.state.dropdownHeight == 170 ?
                                    "black" : "white",
                                    fontFamily: "Bubblegum-Sans",
                                    }}
                                    onSelectItem={(item) =>
                                    this.setState({
                                    previewImage: item.value,
                                    })
                                    }
                                />
                            </View>
                        </ScrollView>
                    </View>
                    <Text>
                    createstory screen
                    </Text>
                </View>
            )
        }
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#15193c"
        },
        droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        },
        appTitle: {
        flex: 0.07,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 5,
        },
        appIcon: {
        flex: 0.3
        },
        appTitleTextContainer: {
        justifyContent: "center",
        alignItems: "center"
        },
        appTitleText: {
        color: "white",
        fontSize: 28,
        fontFamily: "Bubblegum-Sans",
        paddingLeft: 20
        },
  });
  