
const matches = [
    { date: "07 Jun 2025 - 05:00 PM", status: "Available", type: "Cricket", teamA: "Team Alpha", teamB: "Team Beta", logoA: "https://i.pinimg.com/originals/67/1c/a3/671ca3d2acc5f305d20034a9bc8e61ca.png", logoB: "https://i.pinimg.com/originals/48/a2/42/48a242002e0d6d754b2bfaec06e3b7f6.png" },
    { date: "10 Jun 2025 - 03:00 PM", status: "Booked", type: "Cricket", teamA: "Team Warriors", teamB: "https://designzonic.com/download/wp-content/uploads/2019/05/TemplarAvatar.png", logoB: "https://i.pinimg.com/originals/86/01/00/86010068c1ed89c073c17347bb49ddd1.jpg" },
    { date: "12 Jun 2025 - 04:00 PM", status: "Booked", type: "Football", teamA: "Team Lions", teamB: "Team Eagles", logoA: "https://i.pinimg.com/originals/48/a2/42/48a242002e0d6d754b2bfaec06e3b7f6.png", logoB: "https://bcassetcdn.com/public/blog/wp-content/uploads/2022/05/24222215/%F0%9F%8F%88-by-matt-rancatore-dribbble.png" },
    { date: "15 Jun 2025 - 06:00 PM", status: "Pending", type: "Cricket", teamA: "Team Thunder", teamB: "Team Storm", logoA: "https://wallpapercave.com/wp/wp2349559.jpg", logoB: "https://www.logolynx.com/images/logolynx/67/67cdfe82c8c46d6279535e423471ec16.jpeg" },
    { date: "18 Jun 2025 - 06:30 PM", status: "Pending", type: "Football", teamA: "Team Strikers", teamB: "Team Defenders", logoA: "https://i.pinimg.com/originals/02/c4/27/02c4271408d6d627673bcbd0f0d90122.jpg", logoB: " https://i.pinimg.com/736x/eb/43/97/eb4397167704652107a6e7214f790c09.jpg" },
    { date: "20 Jun 2025 - 07:00 PM", status: "Available", type: "Cricket", teamA: "Team Challengers", teamB: "Team Kings", logoA: "https://i.pinimg.com/736x/81/f3/8f/81f38fc2e74f6867dea179035395e0bb.jpg", logoB: "https://i.pinimg.com/474x/6f/1a/7b/6f1a7bd5636294d4ca1392803580e00b.jpg" },
    { date: "25 Jun 2025 - 05:30 PM", status: "Available", type: "Football", teamA: "Team Gladiators", teamB: "Team Panthers", logoA: "https://www.vhv.rs/dpng/d/114-1144541_fortnite-logo-png-transparent-gaming-logo-png-png.png", logoB: "" },
    { date: "28 Jun 2025 - 07:00 PM", status: "Booked", type: "Football", teamA: "Team Sharks", teamB: "Team Wolves", logoA: "logo-sharks.png", logoB: "logo-wolves.png" },
    { date: "05 Jul 2025 - 02:00 PM", status: "Pending", type: "Tennis", teamA: "Player 1", teamB: "Player 2", logoA: "logo-player1.png", logoB: "logo-player2.png" },
    { date: "10 Jul 2025 - 04:00 PM", status: "Available", type: "Tennis", teamA: "Player 3", teamB: "Player 4", logoA: "logo-player3.png", logoB: "logo-player4.png" }
];

function renderMatches() {
    const matchFilter = document.getElementById("matchFilter").value.toLowerCase();
    const sportFilter = document.getElementById("sportFilter").value;
    const container = document.getElementById("matchContainer");
    container.innerHTML = "";
    
    const filteredMatches = matches.filter(match => 
        (matchFilter === "all" || match.status.toLowerCase() === matchFilter) &&
        (sportFilter === "all" || match.type === sportFilter)
    );
    
    filteredMatches.forEach(match => {
        container.innerHTML += `<div class="col-md-6 mb-3">
            <div class="card match-cards bg-white text-black p-2 text-center">
                <p class="fw-bold">${match.date} - ${match.status}</p>
                <div class="d-flex justify-content-center align-items-center">
                    <img src="${match.logoA}" alt="${match.teamA}" class="team-logo">
                    <p class="text-black fw-bold mx-2">${match.teamA} VS ${match.teamB}</p>
                    <img src="${match.logoB}" alt="${match.teamB}" class="team-logo">
                </div>
            </div>
        </div>`;
    });
}
document.getElementById("matchFilter").addEventListener("change", renderMatches);
document.getElementById("sportFilter").addEventListener("change", renderMatches);
renderMatches();
