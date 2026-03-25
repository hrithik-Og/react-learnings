import React from 'react'
import Card from './components/card'
function App() {
  const jobOpenings=[
      {
        brandLogo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
        company: "Google",
        datePosted: "5 days ago",
        post: "Frontend Developer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$45/hr",
        location: "Mountain View, CA"
      },
      {
        brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
        company: "Apple",
        datePosted: "2 weeks ago",
        post: "iOS Developer",
        tag1: "Full Time",
        tag2: "Mid Level",
        pay: "$60/hr",
        location: "Cupertino, CA"
      },
      {
        brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
        company: "Meta",
        datePosted: "1 week ago",
        post: "React Developer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$50/hr",
        location: "Menlo Park, CA"
      },
      {
        brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
        company: "Amazon",
        datePosted: "3 days ago",
        post: "SDE Intern",
        tag1: "Internship",
        tag2: "Entry Level",
        pay: "$35/hr",
        location: "Seattle, WA"
      },
      {
        brandLogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
        company: "Netflix",
        datePosted: "10 days ago",
        post: "Backend Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$80/hr",
        location: "Los Gatos, CA"
      },
      {
        brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
        company: "Microsoft",
        datePosted: "6 days ago",
        post: "Software Engineer",
        tag1: "Full Time",
        tag2: "Mid Level",
        pay: "$55/hr",
        location: "Redmond, WA"
      },
      {
        brandLogo: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:840,cw:2161,ch:2161,q:80,w:2161/DtGtLda47VdS8pE2iJLbBZ.jpg",
        company: "Adobe",
        datePosted: "2 days ago",
        post: "UI/UX Developer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$48/hr",
        location: "San Jose, CA"
      },
      {
        brandLogo: "https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg",
        company: "Tesla",
        datePosted: "4 days ago",
        post: "Frontend Engineer",
        tag1: "Full Time",
        tag2: "Mid Level",
        pay: "$52/hr",
        location: "Palo Alto, CA"
      },
      {
        brandLogo: "https://grapheine.com/wp-content/uploads/2018/10/uber-logo-2560x1576.webp",
        company: "Uber",
        datePosted: "8 days ago",
        post: "Full Stack Developer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$70/hr",
        location: "San Francisco, CA"
      },
      {
        brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-0sgMITwNqzwWbNZfDxjhGmmje755YgLHQ&s",
        company: "Airbnb",
        datePosted: "12 days ago",
        post: "Frontend Engineer",
        tag1: "Contract",
        tag2: "Mid Level",
        pay: "$65/hr",
        location: "San Francisco, CA"
      }
    ];
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
        <Card company={elem.company} brandLogo={elem.brandLogo} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
        </div>
      })}
      </div>
  )
}
export default App