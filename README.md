#git
	
	git init // 把这个目录变成Git可以管理的仓库：

	git commit -m //  提交代码

	git status // 查看工作区的状态

	git diff // 查看修改内容

	git log // 查看日志

	git log --pretty=oneline // 查看美化的日志

	git log --color 
	
	git log --stat 详情信息

	git reset --hard HEAD^ // 恢复上一版本 HEAD^^， HEAD~100

	cat xxx.js // 查看文件内容

	git reflog  // 查看命令历史，以便确定要回到未来的哪个版本。

	git diff HEAD~1 // 与上一版本比较

	git checkout -- file  // 当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令

	rm xxx.js  // 删除文件 恢复用git checkout -- xxx.js
	
	git rm xxx.js // commit 

	git branch // 查看分支

	git branch <name> // 创建分支

	git checkout <name> // 切换分支

	git checkout -b <name> // 创建+切换分支
	
	git merge <name> // 合并到某分支到当前分支

	git branch -d <name>  // 删除分支

	git log --graph命令可以看到分支合并图。

	git stash

	git stash pop

	当手头工作没有完成时，先把工作现场git stash一下，然后去修复bug，修复后，再git stash pop，回到工作现场。

	git branch -D <name>强行删除
	
	
	


	
	