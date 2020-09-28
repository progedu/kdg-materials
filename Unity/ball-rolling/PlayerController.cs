using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class PlayerController : MonoBehaviour
{
    public float speed = 10;
    public Text scoreLabel;
    private int score = 0;
    public Text clearLabel;
    void FixedUpdate()
    {
        float x = Input.GetAxis("Horizontal");
        float z = Input.GetAxis("Vertical");
        Rigidbody rigidbody = GetComponent<Rigidbody>();
        rigidbody.AddForce(x * speed, 0, z * speed);
    }
    void OnTriggerEnter(Collider hit)
    {
        if (hit.CompareTag("DangerWall"))
        {
            int index = SceneManager.GetActiveScene().buildIndex;
            SceneManager.LoadScene(index);
        }
        if (hit.CompareTag("Coin"))
        {
            Destroy(hit.gameObject);
            score = score + 1;
            scoreLabel.text = "コイン獲得数: " + score.ToString();
            if (score == 8)
            {
                clearLabel.text = "CLEAR！";
            }
        }
    }
}