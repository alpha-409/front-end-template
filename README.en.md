## Teacher Training AI Assessment - Frontend Development Documentation

---

### Environment Requirements

1. **Node.js version**: 17.0 or above.
2. **Package Manager**: Use `npm` exclusively (you may configure a domestic registry if needed, but do not mix with Yarn, Pnpm, or Cnpm).
3. **Code Reliability**: Due to time constraints, code review will not be conducted. Ensure the reliability of your code before submission (code submission records will be kept in the repository).
4. **Path Alias**: Use `@` instead of `../` in `vue-router`.

---

### Technology Stack

1. **Vue3**: Frontend framework.
2. **Pinia**: State management tool.
3. **Vue Router**: Routing tool for single-page applications.
4. **Element Plus**: UI component library.
5. **Axios**: HTTP request management tool.
6. **Mock.js**: For local or cloud-based data mocking.

---

### Getting Started

#### 1. Configure Private Repository

##### 1.1 Generate RSA Key

Run the following command in your terminal to generate an RSA key:

```bash
ssh-keygen -t rsa
```

##### 1.2 Configure RSA Public Key

Open the generated `.pub` file and copy its content to your [SSH Public Keys](https://gitee.com/profile/sshkeys).

##### 1.3 Clone Remote Repository

Use the following command to clone the remote repository:

```bash
git clone git@gitee.com:codezzzsleep/ai-evaluate-frontend.git
```

---

#### 2. Initialize the Project

##### 2.1 Navigate to the Project Directory

```bash
cd ai-evaluate-frontend
```

##### 2.2 Install Dependencies

```bash
npm install
```

##### 2.3 Run the Development Environment

```bash
npm run dev
```

---

### Code Submission Workflow

#### 1. Sync Remote Code

Before making any changes, pull the latest code from the remote repository:

```bash
git pull
```

> **Note**: Pulling remote code may cause conflicts. Resolve conflicts carefully.

#### 2. Stage Files

Add the files you want to commit to the staging area:

```bash
git add filename    # Add a specific file
# or
git add .           # Add all modified files
```

#### 3. Commit Changes

Use a descriptive commit message in Chinese to explain the changes:

```bash
git commit -m "Use Chinese to describe the changes in this commit"
```

> **Note**: Ensure the committed version is functional.

#### 4. Push Code to the Remote Repository

After committing, push your code to the remote repository:

```bash
git push
```

---

### Code Version Management

#### Rollback Code

If you need to roll back to a specific version, proceed with caution and back up any important content:

```bash
git reset --hard <commit_id>
```

> **Note**: After rolling back, your local code will reflect the specified version. Sync it to the remote as needed.

---

### Additional Notes

1. **Single-Page Functionality Testing**: Ensure all functionalities are tested and running properly before committing.
2. **Regularly Commit Functional Versions**: Only commit stable, runnable versions to avoid disrupting the work of other team members.
3. **Conflict Resolution**: Pull remote code frequently, resolve conflicts promptly, and maintain synchronization with the repository.

---

For any questions or support, communicate with the team promptly.