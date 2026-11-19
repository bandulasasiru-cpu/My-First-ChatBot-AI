const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "");
myHeaders.append("Cookie", "__cf_bm=LQohfD77HjSHmPxTKsyiycKfpuKfqJX_p66WbscKqTU-1795074002.1807566-1.0.1.1-Vt_pRLi0llnG67enVF8zsw.OXcy6hUSxfsKMC4K6hmoz4Qw3Uc8L856VVe1Aa523pkXeWASCHAFx40wA_31GeYzRz9g_MwKD1385ybcAaXTuYebIv_mCyq7lSH8Hum__");

const raw = JSON.stringify({
  "model": "openai/gpt-oss-20b",
  "messages": [
    {
      "role": "user",
      "content": "i need a paragraph about Anuradhapura"
    }
  ]
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

function sendMessage() {

    fetch("https://api.groq.com/openai/v1/chat/completions", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            document.getElementById("lblDisply").innerText =
                result.choices[0].message.content;

            console.log(result.choices[0].message.content);
        });
}