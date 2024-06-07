export interface TeamMemberInterface{
    id: number,
    team_id: number,
    user_id: string,
    role: string,
    completed: number,
    tasks_assigned: number,
    joined_on: string,
}