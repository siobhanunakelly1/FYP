<template>
    <ul>
        <li v-for ="person in people" v-bind:key="person" >{{person.name}}</li>
    </ul>
</template>
