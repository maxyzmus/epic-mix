const epicMix = [
  "MONTERO / Call Me By Your Name",
  "OMG",
  "Never Gonna Give You Up",
  "Woman",
  "golden hour",
  "Never Been In Love",
  "STAR WALKIN'",
  "Unholy",
  "About Damn Time",
  "Made You Look",
  "Mother",
  "I'm Not Here To Make Friends",
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  mixInfo(epicMix);
});

total.innerText = `${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};
