# Task Team

## <u>Concept Description</u>
The goal of this project is to allow teams to collaborate efficiently and manage tasks. 
<br>
<br>
The inspiration of this task came about at my current workplace. When a service ticket is created, they take the old school
approach and write down information on a paper ticket. I wanted to create a solution that allows managers to create tickets(tasks) and be able to push them
to either a team or individual. Tickets are composed of data that holds information that is needed to complete the said task. 
The person who is assigned the task is able to view the data, update the current status, and submit the ticket as completed.
Managers are able to view the (teams/individuals) progress, create tickets, and create teams.
## <u>Concept Features</u>

1. User Authentication and Roles

    Managers:
    <ul>
        <li>Create, assign, and monitor tasks.</li>
        <li>Create and manage teams</li>
    </ul>

    Team Members:
    <ul>
        <li>View, update status, and mark assigned tasks as completed</li>
    </ul>


2. Task Management

    Create Tasks:
    <ul>
        <li>Managers can create tasks with necessary details.</li>
    </ul>

    Assign Tasks:
    <ul>
        <li>Tasks can be assigned to teams or individual team members.</li>
    </ul>

    Update Tasks:
    <ul>
        <li>Team members can update the status of their tasks.</li>
    </ul>

    Complete Tasks:
    <ul>
        <li>Team members can mark tasks as completed.</li>
    </ul>


3. Team Management

    Create Teams:
    <ul>
        <li>Managers can create and manage teams.</li>
    </ul>

    Assign Team Members:
    <ul>
        <li>Managers can assign members to teams.</li>
    </ul>


4. Progress Tracking

    Manager:
    <ul>
        <li>Will see analytics at the higher level.</li>
        <li>Able to check in on team progress and/or any members progress.</li>
        <li>Able to view past performance.</li>
    </ul>

    Member:
    <ul>
        <li>Will see personal and team analytics.</li>
        <li>Able to check in on team progress and/or own progress.</li>
        <li>Able to view past performance.</li>
    </ul>


## <u>Technology Stack</u>

<h3>Backend</h3>
<ul>
    <li>Framework: Node.js with Express</li>
    <li>Database: Have not fully analyzed the pros and cons yet but either (PostgreSQL or DynamoDB)</li>
</ul>

<h3>Frontend</h3>
<ul>
    <li>Framework: Vite with TypeScript</li>
</ul>

<h3>Authentication</h3>
<ul>
    <li>System: Auth0</li>
</ul>
