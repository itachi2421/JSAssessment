/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line

// Code example
//const x = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nftHold = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, role, xp, iq, skills) {
    const nft = {
        "Name":name,
        "Role": role,
        "XP":xp,
        "IQ":iq,
        "Skills": skills,
    }
    nftHold.push(nft);
    console.log("minted: "+name+"\n")
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nftHold.length; i++) {
        console.log("\n**********************");
        console.log("\nNFT no:\t\t\t"+ (i+1));
        console.log("\nName:\t\t\t"+nftHold[i].Name);
        console.log("Role:\t\t\t"+nftHold[i].Role);
        console.log("XP:\t\t\t\t"+nftHold[i].XP);
        console.log("IQ:\t\t\t\t"+nftHold[i].IQ);
        console.log("Skills:\t\t"+nftHold[i].Skills);
    }
    console.log("\n")
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal number of NFTs: "+nftHold.length)
}

// call your functions below this line
mintNFT("Jay", "smuggler", 6900, 190, "stealing");
mintNFT("Amy","Tinkere",9800,427,"Arms development")
mintNFT("Alfred","Scouting",7800,250,"Stealth")
listNFTs();
getTotalSupply()
