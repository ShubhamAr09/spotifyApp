const Songs = [
    {
      id: 1,
      songName: "Bankai",
      artist: "TBT Prod.",
      duration:"02.01",
      hit:"5,567,721",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/songs%2FTBT%20Prod.%20-%20Bankai.mp3?alt=media&token=39fb8145-a6fc-4d70-bc41-dbbb66729e20",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/images%2FBankai%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=9aa79972-de39-4184-99b7-1c8bc1a75e83",
    },
    {
      id: 2,
      songName: "Vegeta X Awaken",
      artist: "Vegeta",
      duration:"03.21",
      hit:"2,345,221",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/songs%2FVegeta%20x%20Awaken%20Rare%20Hardstyle%20(AniLifts%20Remix).mp3?alt=media&token=31d2e455-db5a-4f0e-b9d7-b58bd83f78b0",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/images%2FVegeta%20x%20Awaken%20Rare%20Hardstyle%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=2fba5f7c-e248-43ee-9702-4a8b925f04d0",
    },
    {
      id: 3,
      favourite: false,
      songName: "Go on, Apologize",
      artist: "Yunyakosva",
      duration:"02.10",
      hit:"2,650,973",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/songs%2FTimbaland_ft_OneRepublic_-_Apologize.mp3?alt=media&token=18e9107b-9fde-42cf-a3d5-041a079c514a",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/images%2FGo%20on%2C%20Apologize%20(Motivational)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=9f2e9a34-9214-4a7d-92eb-ffa0afdf2020",
    },
    {
      id: 4,
      favourite: false,
      songName: "Let Her Go",
      artist: "Passenger",
      duration:"04.12",
      hit:"1,223,534,676",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/songs%2FPassenger_-_Let_Her_Go_Luvmp.Com_.mp3?alt=media&token=8809a7f5-bf89-4b2a-a3a0-d60fc80f6504",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/images%2FLet%20Her%20Go%20(Sped%20Up)%20-%20Remix%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b77ee9ee-cc2d-4d0a-9b8f-58e0f87fd281",
    },
    {
      id: 5,
      favourite: false,
      songName: "Wano Kuni Theme",
      artist: "Styzmask",
      duration:"01.54",
      hit:"963,311",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/songs%2FOne%20Piece%20-%20Wano%20Kuni%20Theme%20Cover%20EP892%20(HQ)%5BStyzmask%5D.mp3?alt=media&token=22571aa8-1afe-4be6-919c-7785730529bd",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/images%2FWano%20Kuni%20Theme%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=382206fe-21f8-4a0e-bce0-ac824842d3a5",
    },
    {
      id: 6,
      favourite: false,
      songName: "My Soldiers Rage",
      artist: "Maul",
      duration:"02.54",
      hit:"5,543,645",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/songs%2F(AOT%20Hardstyle)%20My%20Soldiers%20Rage%20-%20Hiroyuki%20Sawano%20(Maul%20Bootleg).mp3?alt=media&token=eecaaea3-fe0d-4d4b-b4ff-12d659f4c50b",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/images%2FMy%20Soldiers%20Rage%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a9004740-76c1-47fb-a8a4-77eb5e0b123d",
    },
    {
      id: 7,
      favourite: false,
      songName: "Thorfinn X Rage",
      artist: "AniLifts",
      duration:"02.51",
      hit:"547,328",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/songs%2FTHORFINN%20x%20RAGE%20(Mukanjyo%20Hardstyle)%20by%20AniLifts.mp3?alt=media&token=5b0be054-65aa-4f20-80a4-006c9ea2c64a",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/images%2FTHORFINN%20x%20RAGE%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c1c6d121-ec21-4bd1-a8f0-2abfd4e4865f",
    },
    {
      id: 8,
      favourite: false,
      songName: "Way down we go",
      artist: "KALEO",
      duration:"02.43",
      hit:"2,343,221",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/songs%2FKALEO%20-%20Way%20Down%20We%20Go%20(Official%20Music%20Video).mp3?alt=media&token=012ffde8-bcd1-4a3d-90ba-031090b51031",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/images%2FWay%20down%20We%20Go%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=5420af38-fe2b-449e-824f-97eaef6255b1",
    },
    {
      id: 9,
      favourite: false,
      songName: "Maybe My Soulmate Died",
      artist: "David Guetta",
      duration:"01.54",
      hit:"75,570,769",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/songs%2Fiamnotshane%20-%20Maybe%20My%20Soulmate%20Died%20(Lyrics).mp3?alt=media&token=90e95122-79bf-4e45-ab4a-c7634b466c4b",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/images%2FMaybe%20My%20Soulmate%20Died%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a0f6a599-a6a2-4683-bbab-0b6b1dbe204b",
    },
    {
      id: 10,
      favourite: false,
      songName: "Super Saiyan 4D",
      artist: "Maul",
      duration:"02.28",
      hit:"2,936,902",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/songs%2FMaul%20-%20Super%20Saiyan%204D.mp3?alt=media&token=6ab7f71c-b917-48dc-b9f6-ab7bc0d689f4",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-642b9.appspot.com/o/images%2FSuper%20Saiyan%204D%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=7f77f28e-448e-47a9-8751-3dce42b9e364",
    }
  ];
  
  export { Songs };

  