
async function fetchProfileData() {
    const url = 'https://github.com/manumolinari10/portfolio/blob/main/assets/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}