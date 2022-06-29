all: start	

re:
	@npm install --prefix ./srcs/requirements/algo
	@cd ./srcs/requirements/algo/src && tsc index.ts
	@npm install --prefix ./srcs/requirements/backend
	@npm install --prefix ./srcs/requirements/frontend
	@npm run build --prefix ./srcs/requirements/frontend
	@docker-compose -f srcs/docker-compose.yaml up --build
	@echo "\033[92mDocker compose was build\033[0m 👷🏿"

start: 
	@docker-compose -f srcs/docker-compose.yaml up
	@echo "\033[92mDocker compose was up\033[0m ✅"

stop:
	@docker-compose -f srcs/docker-compose.yaml down
	@echo "\033[92mDocker compose was up ⚙️"

clean:
	@rm -rf ./srcs/requirements/algo/node_modules
	@rm -rf ./srcs/requirements/backend/node_modules
	@rm -rf ./srcs/requirements/frontend/node_modules
	@rm -rf ./srcs/requirements/algo/src/*.js
	@docker stop $$(docker ps -qa);\
	docker rm $$(docker ps -qa);\
	docker rmi -f $$(docker images -qa);\
	docker volume rm $$(docker volume ls -q);\
	docker network rm $$(docker network ls -q);\
	clear;\
	echo "\033[92mFull clean was finished \033[0m 🧽"

.PHONY: all re start stop clean
