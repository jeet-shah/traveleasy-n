import React from 'react';
import {styles} from '../component/Styles';
import { Text, View, TouchableOpacity,Modal, FlatList } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { WebView } from 'react-native-webview';
import {ListItem} from 'react-native-elements';

export default class Cart extends React.Component{

    constructor(){
        super()
        this.state={
            PantName:[],
            PantInfo:[],
            PantQuantity:[],
            PantSize:[],
            PantRate:[],
            PantPrice:[],
            ShirtName:[],
            ShirtQuantity:[],
            ShirtSize:[],
            ShirtRate:[],
            ShirtPrice:[],
            WatchName:[],
            WatchQuantity:[],
            WatchSize:[],
            WatchRate:[],
            WatchPrice:[],
            TieName:[],
            TieQuantity:[],
            TieSize:[],
            TieRate:[],
            TiePrice:[],
            SportName:[],
            SportQuantity:[],
            SportSize:[],
            SportRate:[],
            SportPrice:[],
            FormalName:[],
            FormalQuantity:[],
            FormalSize:[],
            FormalRate:[],
            PanFormalPrice:[],
            userID:firebase.auth().currentUser.email,
            showModal:false,
            Status:"Pending"
        }
    }

    getrequesteditemPant = async() => {
        const citiesRef = db.collection('Cart').doc(this.state.userID).collection('Pant').where("userID","==",this.state.userID);
        const snapshot = await citiesRef.get();
        var AllItemsName = []
        var AllItemsSize = []
        var AllItemsQuantity = []
        var AllItemsRate = []
        snapshot.docs.map(doc => {
            var PantNames = doc.data().PantName
            AllItemsName.push(PantNames)
            var PantQuantitys = doc.data().PantQuantity
            AllItemsQuantity.push(PantQuantitys)
            var PantSizes = doc.data().PantSize
            AllItemsSize.push(PantSizes)
            var PantRates = doc.data().Rate
            AllItemsRate.push(PantRates)
            var PantInfo = []
            for(var i = 0;i<AllItemsName.length;i++){
                PantInfo = AllItemsName[i] + ":" + AllItemsQuantity[i] + " " + AllItemsRate[i] + " " + AllItemsSize
            }
            this.setState({
                PantName:AllItemsName,
                PantQuantity:AllItemsQuantity,
                PantSize:AllItemsSize,
                PantRate:AllItemsRate,
                PantInfo:PantInfo
            })
            this.setState({
                PantPrice:this.state.PantQuantity * this.state.PantRate
            })
        });
        console.log(this.state.PantInfo,"{{{{{{{{{{{{{{{{{{")
    }

    getrequesteditemShirt = async() => {
        const citiesRef = db.collection('Cart').doc(this.state.userID).collection('Shirts').where("userID","==",this.state.userID);
        const snapshot = await citiesRef.get();
        var AllItemsName = []
        var ALlItemsSize = []
        var AllItemsQuantity = []
        var AllItemsRate = []
        snapshot.docs.map(doc => {
            var ShirtNames = doc.data().ShirtName
            AllItemsName.push(ShirtNames)
            var ShirtQuantitys = doc.data().PantQuantity
            AllItemsQuantity.push(ShirtQuantitys)
            var ShirtSizes = doc.data().PantQuantity
            ALlItemsSize.push(ShirtSizes)
            var ShirtRates = doc.data().PantRate
            AllItemsRate.push(ShirtRates)
            this.setState({
                ShirtName:AllItemsName,
                ShirtQuantity:AllItemsQuantity,
                ShirtSize:ALlItemsSize,
                ShirtRate:AllItemsRate,
            })
            this.setState({
                ShirtPrice:this.state.ShirtQuantity * this.state.ShirtRate
            })
        });
    }

    getrequesteditemWatch = async() => {
        const citiesRef = db.collection('Cart').doc(this.state.userID).collection('Watch').where("userID","==",this.state.userID);
        const snapshot = await citiesRef.get();
        var AllItemsName = []
        var ALlItemsSize = []
        var AllItemsQuantity = []
        var AllItemsRate = []
        snapshot.docs.map(doc => {
            var WatchNames = doc.data().WatchName
            AllItemsName.push(WatchNames)
            var WatchQuantitys = doc.data().PantQuantity
            AllItemsQuantity.push(WatchQuantitys)
            var WatchSizes = doc.data().PantQuantity
            ALlItemsSize.push(WatchSizes)
            var WatchRates = doc.data().PantRate
            AllItemsRate.push(WatchRates)
            this.setState({
                WatchName:AllItemsName,
                WatchQuantity:AllItemsQuantity,
                WatchSize:ALlItemsSize,
                WatchRate:AllItemsRate,
            })
            this.setState({
                WatchPrice:this.state.WatchQuantity * this.state.WatchRate
            })
        });
    }

    getrequesteditemTie = async() => {
        const citiesRef = db.collection('Cart').doc(this.state.userID).collection('Tie').where("userID","==",this.state.userID);
        const snapshot = await citiesRef.get();
        var AllItemsName = []
        var ALlItemsSize = []
        var AllItemsQuantity = []
        var AllItemsRate = []
        snapshot.docs.map(doc => {
            var TieNames = doc.data().TieName
            AllItemsName.push(TieNames)
            var TieQuantitys = doc.data().PantQuantity
            AllItemsQuantity.push(TieQuantitys)
            var TieSizes = doc.data().PantQuantity
            ALlItemsSize.push(TieSizes)
            var TieRates = doc.data().PantRate
            AllItemsRate.push(TieRates)
            this.setState({
                TieName:AllItemsName,
                TieQuantity:AllItemsQuantity,
                TieSize:ALlItemsSize,
                TieRate:AllItemsRate,
            })
            this.setState({
                TiePrice:this.state.TieQuantity * this.state.TieRate
            })
        });
    }

    getrequesteditemSport = async() => {
        const citiesRef = db.collection('Cart').doc(this.state.userID).collection('Sport').where("userID","==",this.state.userID);
        const snapshot = await citiesRef.get();
        var AllItemsName = []
        var ALlItemsSize = []
        var AllItemsQuantity = []
        var AllItemsRate = []
        snapshot.docs.map(doc => {
            var SportNames = doc.data().SportName
            AllItemsName.push(SportNames)
            var SportQuantitys = doc.data().PantQuantity
            AllItemsQuantity.push(SportQuantitys)
            var SportSizes = doc.data().PantQuantity
            ALlItemsSize.push(SportSizes)
            var SportRates = doc.data().PantRate
            AllItemsRate.push(SportRates)
            this.setState({
                SportName:AllItemsName,
                SportQuantity:AllItemsQuantity,
                SportSize:ALlItemsSize,
                SportRate:AllItemsRate,
            })
            this.setState({
                SportPrice:this.state.SportQuantity * this.state.SportRate
            })
        });
    }

    getrequesteditemFormal = async() => {
        const citiesRef = db.collection('Cart').doc(this.state.userID).collection('Formal').where("userID","==",this.state.userID);
        const snapshot = await citiesRef.get();
        var AllItemsName = []
        var ALlItemsSize = []
        var AllItemsQuantity = []
        var AllItemsRate = []
        snapshot.docs.map(doc => {
            var FormalNames = doc.data().FormalName
            AllItemsName.push(FormalNames)
            var FormalQuantitys = doc.data().PantQuantity
            AllItemsQuantity.push(FormalQuantitys)
            var FormalSizes = doc.data().PantQuantity
            ALlItemsSize.push(FormalSizes)
            var FormalRates = doc.data().PantRate
            AllItemsRate.push(FormalRates)
            this.setState({
                FormaltName:AllItemsName,
                FormalQuantity:AllItemsQuantity,
                FormalSize:ALlItemsSize,
                FormalRate:AllItemsRate,
            })
            this.setState({
                FormaltPrice:this.state.FormalQuantity * this.state.FormalRate
            })
        });
    }

    componentDidMount(){
        this.getrequesteditemPant()
        this.getrequesteditemFormal()
        this.getrequesteditemShirt()
        this.getrequesteditemSport()
        this.getrequesteditemTie()
        this.getrequesteditemWatch()
    }

    handleResponse = data => {
        if(data.title === 'success'){
            this.setState({Status:'Complete',showModal:false})
        }else if(data.title === 'cancel'){
            this.setState({Status:'Cancel',showModal:false})
        }else{
            return;
        }
    }

    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => {
        return(
          <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title style={{fontWeight:'bold',fontSize:18,color:'black'}}>{this.state.PantName}</ListItem.Title>
                <ListItem.Subtitle style={{fontSize:18,color:'black'}}>{this.state.PantQuantity}</ListItem.Subtitle>
                <ListItem.Subtitle style={{fontSize:18,color:'black'}}>{this.state.PantRate}</ListItem.Subtitle>
                <ListItem.Subtitle style={{fontSize:18,color:'black'}}>{this.state.PantSize}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
    )}

    render(){
        return(
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                </View>
                <Modal
                  visible={this.state.showModal}
                  onRequestClose={()=>{this.setState({showModal:false})}}
                >
                    <WebView
                      source={{uri:"http://192.168.1.104:3000"}}
                      onNavigationStateChange={data => this.handleResponse(data)}
                      />
                </Modal>
                <View style={{width:300,height:500}}>
                    <FlatList 
                        data={this.state.PantInfo}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>{this.setState({showModal:true})}}>
                    <Text style={styles.buttonText}>Pay</Text>
                </TouchableOpacity>
                <Text>Payment Status: {this.state.Status}</Text>
            </View>
        )
    }
}