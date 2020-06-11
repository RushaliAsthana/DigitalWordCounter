var wordlimit;
function load()
{
    wordlimit=5;
    document.getElementById("totwords").innerHTML="Word Limit:"+wordlimit;
    document.getElementById("writtenwords").innerHTML="Words Written:0";
    document.getElementById("wordsleft").innerHTML="Words Written:"+wordlimit;
}
function countWords()
{
    
    var x = document.getElementById("commentarea");
    var p=x.value.length;
    var words=x.value.trim().split(/\s+/).length;
    console.log(x.value.length);
    if(x.value.length==0)
    {
        load();
    }
    else
    {
    if(words==wordlimit && x.value.charAt(x.value.length-1)==" ")
    {
        x.maxLength=p;
        document.getElementById("enough").style.display="block";
        document.getElementById("enough").innerHTML="Your Done With your word limit!";
        document.getElementById("enough").style.color="red";
      
    }
    
    if(words<wordlimit)
    {
        document.getElementById("enough").style.display="none";
        x.removeAttribute('maxLength');

    }
    document.getElementById("writtenwords").innerHTML = "Words Written:"+(words);
    document.getElementById("wordsleft").innerHTML = "Words Left:"+(wordlimit-words);
   }
    
}
