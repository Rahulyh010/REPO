

export default function Card({lang,star,fork,name}){

    return <div>
<div> 

<h3>{name}</h3>
<h5>{lang}</h5>

<img width="10%" src="https://img.lovepik.com/element/40170/9523.png_300.png" alt="" /> <p> {star}</p>
<img width="10%" src="https://w7.pngwing.com/pngs/1/440/png-transparent-git-computer-icons-merge-source-code-commit-github-sign-git-repository.png" alt="" /> <p>
    {fork}
</p>
</div>

    </div>
}