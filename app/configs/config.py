#!/usr/bin/env python
# coding=utf-8
'''
Description  : 
Author       : linchen
Date         : 2024-07-22 08:17:02
Version      : 1.0.0
LastEditors  : linchen
LastEditTime : 2024-07-22 09:18:09
'''


import os
import yaml

from app.configs.singleton import Singleton

from app.constants import Constants

class Config(metaclass=Singleton):

    @staticmethod
    def load() -> dict:
        """load config file

        Returns:
            dict: all configs
        """
        base_path: str = os.path.dirname(os.path.dirname(__file__))
        config_yaml: str = os.path.join(
            base_path, "configs", Constants.CONFIG_FILE_NAME)
        if not os.path.exists(config_yaml):
            print(f"Can't find config file, {config_yaml}")
            exit(-1)
        with open(config_yaml, 'r', encoding="utf-8") as fp:
            config = yaml.safe_load(fp)
        return config


    @staticmethod
    def to_path(path: str) -> str:
        """
        process file path
        """
        base_path = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
        real_path = path if os.path.isabs(
            path) else os.path.join(base_path, path)
        return real_path

    def __init__(self):
        cfg = Config.load()
        self.base_path = os.path.dirname(
            os.path.dirname(os.path.dirname(__file__)))
        # log configs
        self.log_dir = os.path.join(self.base_path, Config.to_path(cfg["log"]["dir"]))
        self.log_file = cfg["log"]["file"]
        self.log_level = cfg["log"]["level"]
        self.backup_count = cfg["log"]["backup_count"]

        # db configs
        self.db_configs: dict = cfg.get("db", {})
        self.db_type = self.db_configs.get("type", "")
        self.db_host = os.path.join(self.base_path, self.db_configs.get("host", ""))
        self.db_port = self.db_configs.get("port", "")
        self.db_name = self.db_configs.get("database", "")
        self.db_pool_size = self.db_configs.get("pool_size")
        self.db_database = self.db_configs.get("database", "")
