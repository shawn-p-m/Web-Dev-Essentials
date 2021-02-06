<template>
  <div id="function-buttons">
    <v-row
      class="d-flex flex-wrap"
      style="margin-top: 40px; height: 100px; justify-content: space-evenly"
    >
      <v-btn width="120" :color="arrowButtonColor" @click="arrow()"> Arrow </v-btn>
      <v-btn width="120" :color="mapButtonColor" @click="map()"> Map </v-btn>
      <v-btn width="120" :color="reduceButtonColor" @click="reduce()"> Reduce </v-btn>
    </v-row>

    <v-row class="d-flex justify-space-around flex-wrap" style="height: 100px">
      <v-btn width="120" :color="promiseButtonColor" @click="promise()"> Promise </v-btn>
      <v-btn width="120" :color="spreadButtonColor" @click="spread()"> Spread </v-btn>
      <v-btn width="120" :color="generatorButtonColor" @click="generator()"> Generator </v-btn>
      <v-btn width="120" :color="callbackButtonColor" @click="callback()"> Callback </v-btn>
    </v-row>
  </div>
</template>

<script>
import {
  arrowGivesThree,
  averageDollaz,
  numsWithOddOrEven,
  promiseWithTitle,
  spreadedArray,
  generatorArray,
  callbackAnswer,
} from "@/mixins/specifics";
import { mapGetters } from "vuex";
//test
const giveSuccessOrError = (condition) => {
  if (condition) {
    return "success";
  } else {
    return "error";
  }
};
export default {
  name: "FunctionButtons",

  computed: mapGetters([
    "arrowButtonColor",
    "mapButtonColor",
    "reduceButtonColor",
    "promiseButtonColor",
    "spreadButtonColor",
    "generatorButtonColor",
    "callbackButtonColor",
  ]),
  methods: {
    arrow() {
      this.$store.commit("saveArrowButtonColor", giveSuccessOrError(arrowGivesThree() === 3));
    },
    map() {
      this.$store.commit(
        "saveMapButtonColor",
        giveSuccessOrError(
          JSON.stringify(numsWithOddOrEven) ===
            JSON.stringify([
              "12: is even",
              "13: is odd",
              "16: is even",
              "17: is odd",
              "8: is even",
              "32: is even",
              "33: is odd",
            ])
        )
      );
    },
    reduce() {
      this.$store.commit(
        "saveReduceButtonColor",
        giveSuccessOrError(JSON.stringify(averageDollaz) === JSON.stringify("885.53"))
      );
    },
    async promise() {
      promiseWithTitle.then((title) => {
        try {
          this.$store.commit(
            "savePromiseButtonColor",
            giveSuccessOrError(JSON.stringify(title) === JSON.stringify("delectus aut autem"))
          );
        } catch (e) {
          alert(e);
        } finally {
          this.promiseButtonColor = this.$store.state.promiseButtonColor;
        }
      });
    },
    spread() {
      this.$store.commit(
        "saveSpreadButtonColor",
        giveSuccessOrError(
          JSON.stringify(spreadedArray) === JSON.stringify([1, 12, 7, 8, 2, 3, 1, 6, 3, 6, 2, 1])
        )
      );
    },
    generator() {
      this.$store.commit(
        "saveGeneratorButtonColor",
        giveSuccessOrError(JSON.stringify(generatorArray) === JSON.stringify([5, 15, 25, 7]))
      );
    },
    callback() {
      this.$store.commit(
        "saveCallbackButtonColor",
        giveSuccessOrError(JSON.stringify(callbackAnswer) === JSON.stringify(3))
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
