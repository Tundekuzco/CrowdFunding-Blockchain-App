pragma solidity ^0.8.0;

contract Crowdfunding {
    struct Project {
        address payable creator;
        uint256 targetAmount;
        uint256 deadline;
        uint256 totalFunds;
        bool completed;
    }

    uint256 public projectCount;
    mapping(uint256 => Project) public projects;

    event ProjectCreated(uint256 projectId, address indexed creator, uint256 targetAmount, uint256 deadline);
    event DonationReceived(uint256 projectId, address indexed donor, uint256 amount);
    event ProjectCompleted(uint256 projectId, address indexed creator);

    function createProject(uint256 targetAmount, uint256 durationInDays) public {
        require(targetAmount > 0, "Target amount must be greater than 0");

        uint256 deadline = block.timestamp + (durationInDays * 1 days);
        projectCount++;
        projects[projectCount] = Project(payable(msg.sender), targetAmount, deadline, 0, false);

        emit ProjectCreated(projectCount, msg.sender, targetAmount, deadline);
    }

    function donate(uint256 projectId) public payable {
        Project storage project = projects[projectId];
        require(!project.completed, "Project is already completed");
        require(block.timestamp < project.deadline, "Project deadline has passed");

        project.totalFunds += msg.value;
        emit DonationReceived(projectId, msg.sender, msg.value);

        if (project.totalFunds >= project.targetAmount) {
            project.completed = true;
            project.creator.transfer(project.totalFunds);
            emit ProjectCompleted(projectId, project.creator);
        }
    }

    function getProject(uint256 projectId) public view returns (Project memory) {
        return projects[projectId];
    }
}
