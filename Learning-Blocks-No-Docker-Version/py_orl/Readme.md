# Learning Blocks Backend

This is an overview of how to run Learning Blocks without using Docker. It describes setting up the project and running the
local server.
> See the [Documentation Directory](/Documentation%20Directory) for help.

## Getting started.

Install PostgreSQL and the Python dependencies. Instructions [here (No_docker_getting_started.md)](/Documentation%20Directory/No_docker_getting_started.md).

### Add environment variables

Before starting the application, add the environment variables to your path. The required ones are project_name and postgres_*. All values can be changed.

You can also try to create a .env file. We should support in the future reading the environment variables automatically from this file.

#### .env

```dotenv
# The application is configured to use only lowercase environment variable names. Example: lower_case=AnythiNGelseUPPER023~#=. The names are case-sensative.
domain=localhost

# Backend
project_name="Learning Blocks"

# Postgres
postgres_server=localhost
postgres_user=postgres
postgres_password=change_me_password01
postgres_db=app

# PgAdmin
pgadmin_listen_port=5050
pgadmin_default_email=user
pgadmin_default_password=change_me_password01
```

### Initialize the database

Create a database with the same name as the postgres_db environment variable. Then, run the Alembic migration to
initialize the database tables. To populate the database with data, run the initial_data.py script.

```shell
alembic upgrade head
python initial_data.py
```

### Run the server

With `uvicorn app:app --reload` running, you should be able to navigate to localhost:8000 in your browser. Verify it is
running by viewing [localhost:8000/docs](http://localhost:8000/docs).

```shell
# Before running, install python packages in a virtual environment.
python -m uvicorn app:app --reload
```

You can also start the server with `make local`. View other commands in
the [Makefile](/Learning-Blocks-No-Docker-Version/py_orl/Makefile).
