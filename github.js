class Github {

    constructor() {
        
        this.client_id = '05756c585e1b5062719b';
        
        this.client_secret = 'e3ba5d1c14a17873ef0656743371949236268252';

        this.repos_count = 5;

        this.repos_sort = 'created:asc';
    }

    async getUser(user) {

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile: profile,
            repos: repos
        }
    }
}