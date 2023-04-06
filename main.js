var select = 0
var fail = 0
var wordLefted = []
var word = [["Hangman", "That game you are playing right now."], ["Thomas Hj", "About the creator of this game."], ["HTML", "Markup language for creating Web pages."], ["CSS", "Wep page styles"], ["PHP", "A very popular server scripting language."], ["JavaScript", "Make web-page dynamic without reload the web page."], ["Java", "Run 15 billion devices.\nA program can be run in Windows, Linux and Mac"], ["SoloLearn", "A company that everyone can code for fun and share."], ["Love", "What is ?\nBaby don't hurt me\nDon't hurt me\nNo more"], ["Document", "A lot of text in the a file."], ["Playground", "There school kids go to."], ["Run", "Usain bolt."], ["Code", "var hw = 'Hello World';"], ["Samsung", "A company create Phone, Tv, Monitor, SDD, Memory chip..."], ["Super Mario", "A very popular game in Nintendo 64 that have red hat."], ["Star", "Super Mario like to get."], ["Clock", "14:12 or 14pm"], ["Binary Clock", "A clock that only use 0 or 1."], ["Sword", "Link from Zelda have on the hand."], ["Girl", "Not boy but ?"], ["Boy", "Not girl but ?"], ["Female", "Other name as girl."], ["Male", "Other name as boy."], ["Smartphone", "Something you've always on you."]]
var tastatur = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function gId(id){
    return document.getElementById(id)
}
function startGame(){
    gId("home").className = "h"
    gId("result").className = "h"
    newGame()
}
function newGame(){
    clearTastatur()
    clearPlayer()
    createWord()
}
function createWord(){

}
function clearTastatur(){

}
function clearPlayer(){
    
}