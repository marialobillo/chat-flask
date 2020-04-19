=========
py_dotenv
=========

To read from `.env` file and put it into `os.environ`.
This project is based on https://github.com/theskumar/python-dotenv


Install
=======

.. code-block::

    $ pip install -e git+https://github.com/aongko/py_dotenv@master#egg=py_dotenv-0

Clone this project, run:

.. code-block::

    $ python3 setup.py install

Example
=======

Assuming you have an `.env` file alongside your main module.

::

    .
    ├── .env
    └── main.py

The code would look like this:

.. code-block::

    import os
    from py_dotenv import read_dotenv

    dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
    read_dotenv(dotenv_path)

Let's assume your `.env` file looks like this:

.. code-block::

    APP_DEBUG = TRUE
    CUSTOM_CONFIGURATION = ABC

After running the code above, you now can access the environment
variable like this:

.. code-block::

    assert os.getenv('APP_DEBUG') == 'TRUE'
    assert os.getenv('CUSTOM_CONFIGURATION') == 'ABC'

