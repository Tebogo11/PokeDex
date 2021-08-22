import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
//Application Screens
import SearchPage from "./screens/SearchPage";
import SearchResult from "./screens/SearchResult";
import InfoPage from "./screens/pokemonInfo/InfoPage";
//Components
import Header from "./components/Header";
import { fetchPokemon } from "./store/actions/pokemon";

import { NativeRouter, Route } from "react-router-native";

const Router = () => {
  const [header, setHeader] = useState("Pokédex");
  const [searchingFor, setSearchingFor] = useState("");
  const [currentScreen, setCurrentScreen] = useState("home");
  const [viewingPokemonID, setViewingPokemonID] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  return (
    <NativeRouter>
      <View style={styles.outlinebg}>
        <View style={styles.inlineStyle}>
          <Header
            screen={currentScreen}
            setScreen={setCurrentScreen}
            header={header}
            setHeader={setHeader}
          />
          <Route exact path="/">
            <SearchPage
              currentSearchValue={searchingFor}
              searching={setSearchingFor}
              setScreen={setCurrentScreen}
            />
          </Route>
          <Route path="/result">
            <SearchResult
              searchData={searchingFor}
              setScreen={setCurrentScreen}
              setViewingPokemonID={setViewingPokemonID}
              setHeader={setHeader}
            />
          </Route>
          <Route path="/info">
            <InfoPage
              pokemonID={viewingPokemonID}
              setScreen={setCurrentScreen}
              setViewingPokemonID={setViewingPokemonID}
              setHeader={setHeader}
            />
          </Route>
        </View>
      </View>
    </NativeRouter>
  );
};

export default Router;

const styles = StyleSheet.create({
  outlinebg: {
    flex: 1,
    backgroundColor: "red",
    padding: 10,
  },
  inlineStyle: {
    backgroundColor: "white",
    flex: 1,
  },
});
