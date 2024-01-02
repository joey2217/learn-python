# learn-python

## 项目管理

### 创建虚拟环境

```sh
python -m venv env
```

### 激活虚拟环境

```sh
C:\ .. \env\Scripts\activate # windows
source env/bin/activate # Linux、WSL 、macOS 
```

### 依赖管理

```sh
pip freeze > requirement.txt  
pip list --format=freeze > requirements.txt
pip install -r requirements.txt
```

#### 安装包

```sh
pip install python-dateutil==2.7.4
pip install python-dateutil
```

#### 升级包

```sh
pip install "python-dateutil==2.7.*" --upgrade
pip install python-dateutil --upgrade
```