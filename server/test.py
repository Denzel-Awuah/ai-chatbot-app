from app import app
import unittest

class test_hello_world(unittest.TestCase):
    
    def test_hello(self):
        test_response = app.test_client().get('/')
        self.assertEqual(test_response.data, b'Testing method')

