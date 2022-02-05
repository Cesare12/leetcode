#include <stdio.h>
#include <stdlib.h>

/**
 * Definition for singly-linked list.
 */
struct ListNode {
     int val;
     struct ListNode *next;
};

/// LinkedList 测试辅助函数

// 根据n个元素的数组arr创建一个链表, 并返回链表的头
struct ListNode* createLinkedList(int arr[], int n){

    if(n == 0)
        return NULL;

    struct ListNode* head = malloc(sizeof(struct ListNode));
    head->val = arr[0];
    head->next = NULL;

    struct ListNode* curNode = head;
    for(int i = 1 ; i < n ; i ++){
        struct ListNode* temp = malloc(sizeof(struct ListNode));
        temp->val = arr[i];
        temp->next = NULL;
        curNode->next = temp;
        curNode = curNode->next;
    }

    return head;
}

// 打印以head为头结点的链表信息内容
void printLinkedList(struct ListNode* head){

    struct ListNode* curNode = head;
    while(curNode != NULL){
        printf("%d -> ", curNode->val);
        // cout << curNode->val << " -> ";
        curNode = curNode->next;
    }
    printf("NULL\n");
    // cout << "NULL" << endl;

    return;
}

// 释放以head为头结点的链表空间
void deleteLinkedList(struct ListNode* head){

    struct ListNode* curNode = head;
    while(curNode != NULL){
        struct ListNode* delNode = curNode;
        curNode = curNode->next;
        free(delNode);
    }

    return;
}

// test leetcode 206
struct ListNode* reverseList(struct ListNode* head) {

    struct ListNode* pre = NULL;
    struct ListNode* cur = head;
    while(cur != NULL){
        struct ListNode* next = cur->next;
        cur->next = pre;
        pre = cur;
        cur = next;
    }

    return pre;
}

int main(){

    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr)/sizeof(int);

    struct ListNode* head = createLinkedList(arr, n);
    printLinkedList(head);

    struct ListNode* head2 = reverseList(head);
    printLinkedList(head2);

    deleteLinkedList(head2);

    return 0;
}
