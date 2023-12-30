# git clone the repository

tkn task start git-clone --param=url=https://github.com/rafaelmmurga/dipo-cloud-disco-service --param=deleteExisting="true" --workspace=name=output,claimName=shared-workspace --showlog

# list directory

tkn task start list-directory --workspace=name=directory,claimName=shared-workspace --showlog

# Build source code

tkn task start maven --param=GOALS="-B,-DskipTests,clean,package" --workspace=name=source,claimName=shared-workspace --workspace=name=maven-settings,config=maven-settings --showlog




