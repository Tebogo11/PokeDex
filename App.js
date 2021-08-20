import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
//Application Screens
import SearchPage from "./screens/SearchPage";
import SearchResult from "./screens/SearchResult";
//Components
import Header from "./components/Header";
import Constants from "expo-constants";
//Redux State
import pokemonReducer from "./store/reducers/pokemon";

import { NativeRouter, Route, Link, useHistory } from "react-router-native";

export default function App() {
  const [searchingFor, setSearchingFor] = useState("");
  const [currentScreen, setCurrentScreen] = useState("home");

  const rootReducer = combineReducers({
    Pokemon: pokemonReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <View style={styles.StatusBar}>
          <StatusBar translucent barStyle="light-content" />
        </View>
        <SafeAreaView style={{ flex: 1 }}>
          <NativeRouter>
            <Header screen={currentScreen} setScreen={setCurrentScreen} />
            <Route exact path="/">
              <SearchPage
                searching={setSearchingFor}
                setScreen={setCurrentScreen}
              />
            </Route>
            <Route path="/result">
              <SearchResult searchData={searchingFor} />
            </Route>
          </NativeRouter>
        </SafeAreaView>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  StatusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: "red",
  },
});
