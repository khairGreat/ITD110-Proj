import logging


logging.basicConfig(
    filename='app.log',              # Log file name
    filemode='a',                    # Append mode ('w' for overwrite)
    level=logging.DEBUG,             # Minimum level to log
    format='%(asctime)s [%(levelname)s] %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)