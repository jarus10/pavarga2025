import React, { useEffect, useState } from 'react'
import { GOOGLE_FORM_URL } from '../config'

export default function Team(){
  useEffect(()=>{ window.scrollTo(0,0) },[])
  const [members,setMembers] = useState([{name:'',email:''},{name:'',email:''}])
  const addMember = ()=>{ if(members.length<6) setMembers(prev=>[...prev,{name:'',email:''}]) }
  const removeMember = (i)=> setMembers(prev=>prev.filter((_,idx)=>idx!==i))
  const handleChange = (i,field,val)=> setMembers(prev=>prev.map((m,idx)=> idx===i ? {...m,[field]:val} : m))
  const handleSubmit = (e)=>{ e.preventDefault(); if(GOOGLE_FORM_URL){ window.open(GOOGLE_FORM_URL,'_blank'); return } alert('Team submission saved locally (simulation)') }
  return (
    <section className="form-hero neon-section">
      <div className="container">
        <h2>Team Registration</h2>
        <p className="muted">Add team members (up to 6). Submissions will open your Google Form when configured.</p>
        <form id="team-form" className="form-card" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="float-label">Team name
              <input name="teamName" type="text" required />
            </label>
            <label className="float-label">Event
              <select name="event" required>
                <option value="">Select an event</option>
                <option value="project">Project Presentation</option>
                <option value="robotics">Robotics</option>
                <option value="quiz">Quiz</option>
              </select>
            </label>
          </div>
          <div id="members" className="members-list">
            {members.map((m,i)=> (
              <div className="member" key={i}>
                <input placeholder="Member full name" value={m.name} onChange={(e)=>handleChange(i,'name',e.target.value)} required />
                <input placeholder="Email" value={m.email} onChange={(e)=>handleChange(i,'email',e.target.value)} required />
                <button type="button" className="btn ghost" onClick={()=>removeMember(i)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="form-actions">
            <button type="button" className="btn ghost" onClick={addMember}>+ Add member</button>
            <button type="submit" className="btn primary">Submit Team</button>
          </div>
        </form>
      </div>
    </section>
  )
}

