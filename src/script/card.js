export function cardbox() {
	document.querySelector(`#cardbox`).innerHTML =
		`<div class="card border rounded-sm flex gap-2 shadow-2xl p-3 w-2xs">
    <div class="card-image rounded-sm">
    <img src="../src/assets/images/nomi.jpeg" alt="nomi" />
    </div>
    <div class="card-text">
							<div class="card-header"><h2>Nouman</h2></div>
							<div class="card-discription">BJJ Blue Belt</div>
						</div>
					</div>`;
}
